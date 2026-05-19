"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Copy, Video, MessageSquare, Send, Linkedin } from "lucide-react";

const Peer = dynamic(() => import("peerjs"), { ssr: false });

const mentors = [
  { id: "mentor1", name: "Vrinda", linkedin: "https://www.linkedin.com/in/vrinda-bindal-55b645349/", Designation: "Software Engineer" },
  { id: "mentor2", name: "Ravi", linkedin: "https://www.linkedin.com/in/ravi-beniwal-342906274/", Designation: "Reserach Intern" },
  { id: "mentor3", name: "Nittish", linkedin: "https://www.linkedin.com/in/nittish-baboria/", Designation: "Business Analyst" },
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
          Establish secure, encrypted text connections directly with industry mentors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
        {/* Left Column: Connection & Network */}
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
                className="w-full bg-emerald-500/10 text-emerald-400 font-medium py-3 rounded-xl hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2 border border-emerald-500/20 hover:border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" /> Connect Now
              </button>
            </div>
          </div>

          {/* Mentors Network Mini-List */}
          <div className="liquid-glass p-6 rounded-3xl border border-white/10 relative overflow-hidden flex-1">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Active Mentors</h3>
            <div className="flex flex-col gap-3">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-black/40 border border-white/5 rounded-xl p-3 flex items-center justify-between group/mentor hover:border-white/20 transition-all">
                  <div>
                    <h4 className="text-white text-sm font-medium">{mentor.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1">{mentor.Designation}</p>
                  </div>
                  <div className="flex gap-1.5">
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg hover:bg-white/10 text-white/40 hover:text-blue-400 transition-colors" title="LinkedIn">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <button 
                      onClick={() => { setOtherPeerId(mentor.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-1.5 bg-white/5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                      title="Use ID"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Encrypted Chat Area */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="liquid-glass p-4 rounded-3xl border border-white/10 h-full flex flex-col relative min-h-[500px]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 mb-4">
              <MessageSquare className="w-5 h-5 text-white/60" />
              <h2 className="text-lg text-white font-medium">Encrypted Chat</h2>
              <span className="ml-auto flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> End-to-End Encrypted
              </span>
            </div>

            <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 overflow-y-auto mb-4 flex flex-col gap-4 shadow-inner">
              {messages.length === 0 ? (
                <div className="m-auto text-center text-white/30 text-sm flex flex-col items-center">
                  <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-lg font-medium tracking-wide">Awaiting Connection...</p>
                  <p className="text-xs mt-2 max-w-xs">Enter a Peer ID on the left to establish a secure chat session.</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 px-2">{msg.sender}</span>
                    <div className={`px-5 py-3 rounded-2xl text-sm max-w-[85%] leading-relaxed shadow-lg ${msg.sender === "You" ? "bg-white text-black rounded-tr-sm" : "bg-black/60 text-white rounded-tl-sm border border-white/10"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="flex gap-3">
              <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..." 
                className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-inner"
              />
              <button 
                onClick={sendMessage} 
                className="bg-white hover:bg-white/90 text-black px-6 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group font-medium"
              >
                <span className="hidden sm:inline">Send</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
