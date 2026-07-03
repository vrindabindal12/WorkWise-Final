"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Copy, Video, MessageSquare, Send, Linkedin } from "lucide-react";

const Peer = dynamic(() => import("peerjs"), { ssr: false });

const mentors = [
  { id: "mentor1", name: "Vrinda", linkedin: "https://www.linkedin.com/in/vrinda-bindal-55b645349/", Designation: "Software Engineer" },
  { id: "mentor2", name: "Ravi", linkedin: "https://www.linkedin.com/in/ravi-beniwal-342906274/", Designation: "Reserach Intern" },
  { id: "mentor3", name: "Nittish", linkedin: "https://www.linkedin.com/in/nittish-baboria/", Designation: "Business Aanlyst" },
];

export default function VideoCall() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peerId, setPeerId] = useState("");
  const [otherPeerId, setOtherPeerId] = useState("");
  const peerInstance = useRef(null);
  const connRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const initializePeer = async () => {
      const PeerJS = (await import("peerjs")).default;
      peerInstance.current = new PeerJS();

      peerInstance.current.on("open", (id) => {
        setPeerId(id);
        console.log("Your Peer ID:", id);
      });

      peerInstance.current.on("call", async (call) => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = stream;
        call.answer(stream);

        call.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
        });
      });

      peerInstance.current.on("connection", (conn) => {
        connRef.current = conn;
        conn.on("data", (data) => {
          setMessages((prev) => [...prev, { sender: "Peer", text: data }]);
        });
      });
    };

    initializePeer();
  }, []);

  const connectToPeer = () => {
    if (!otherPeerId) return alert("Enter a valid Peer ID!");
    const conn = peerInstance.current.connect(otherPeerId);
    connRef.current = conn;
    conn.on("data", (data) => {
      setMessages((prev) => [...prev, { sender: "Peer", text: data }]);
    });
  };

  const sendMessage = () => {
    if (message.trim() !== "" && connRef.current) {
      connRef.current.send(message);
      setMessages([...messages, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center">
      {/* Header section */}
      <div className="text-center mb-12">
        <div className="border border-white/10 rounded-full px-4 py-1.5 mb-6 inline-flex items-center justify-center bg-white/[0.02]">
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Peer-to-Peer</span>
        </div>
        <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Live <em className="italic font-normal text-white/70">Mentorship</em>
        </h1>
        <p className="text-white/50 text-base max-w-md mx-auto">
          Establish secure, low-latency WebRTC connections directly with industry mentors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Left Column: Connection & Chat */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Your ID Card */}
          <div className="liquid-glass p-6 rounded-3xl border border-white/10 relative overflow-hidden group">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-3">Your Routing ID</h3>
            <div className="flex items-center gap-3 bg-black/40 border border-white/5 p-3 rounded-xl overflow-hidden">
              <code className="text-white/90 text-xs truncate flex-1">{peerId || "Generating..."}</code>
              <button
                onClick={() => navigator.clipboard.writeText(peerId)}
                className="text-white/50 hover:text-white transition-colors p-1 bg-white/5 rounded-md border border-white/10 hover:bg-white/10"
                title="Copy ID"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">Share this ID securely with a mentor to receive incoming connections.</p>
          </div>

          {/* Connect Card */}
          <div className="liquid-glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Establish Connection</h3>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter Peer ID..."
                value={otherPeerId}
                onChange={(e) => setOtherPeerId(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                onClick={connectToPeer}
                className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" /> Connect Now
              </button>
            </div>
          </div>

          {/* Chat Window */}
          <div className="liquid-glass p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col h-[400px]">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Encrypted Chat</h3>
            <div className="flex-1 bg-black/40 border border-white/5 rounded-xl p-4 overflow-y-auto mb-4 flex flex-col gap-3">
              {messages.length === 0 ? (
                <div className="m-auto text-center text-white/30 text-sm flex flex-col items-center">
                  <MessageSquare className="w-8 h-8 mb-2 opacity-30" />
                  No messages yet.
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}>
                    <span className="text-[10px] text-white/30 uppercase tracking-wider mb-1 px-1">{msg.sender}</span>
                    <div className={`px-4 py-2.5 rounded-2xl text-sm max-w-[85%] leading-relaxed ${msg.sender === "You" ? "bg-white text-black rounded-tr-sm" : "bg-white/10 text-white rounded-tl-sm border border-white/5"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type payload..."
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                onClick={sendMessage}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-colors border border-white/5"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Mentors Network */}
        <div className="lg:col-span-2">
          <div className="liquid-glass p-6 md:p-8 rounded-3xl border border-white/10 h-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl text-white tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Active Network
              </h2>
              <span className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {mentors.length} Online
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all group flex flex-col justify-between shadow-[0_0_20px_rgba(255,255,255,0.01)] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-white/50 text-sm">{mentor.Designation}</p>
                      </div>
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setOtherPeerId(mentor.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full mt-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:bg-white hover:text-black transition-all group-hover:border-white/30 flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" /> Use Routing ID
                  </button>
                </div>
              ))}
            </div>

            {/* Disclaimer / Info */}
            <div className="mt-8 pt-8 border-t border-white/5 text-center">
              <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
                Our WebRTC architecture ensures that your calls and messages are strictly peer-to-peer. No data touches our servers during your mentorship session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
