"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Copy, Video, Linkedin, MonitorPlay, Users } from "lucide-react";

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
    };

    initializePeer();
  }, []);

  const startCall = async () => {
    if (!otherPeerId) return alert("Enter a valid Peer ID!");

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;

    const call = peerInstance.current.call(otherPeerId, stream);

    call.on("stream", (remoteStream) => {
      remoteVideoRef.current.srcObject = remoteStream;
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center">
      {/* Header section */}
      <div className="text-center mb-12">
        <div className="border border-white/10 rounded-full px-4 py-1.5 mb-6 inline-flex items-center justify-center bg-white/[0.02]">
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Live Mentorship</span>
        </div>
        <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Video <em className="italic font-normal text-white/70">Sessions</em>
        </h1>
        <p className="text-white/50 text-base max-w-md mx-auto">
          Establish secure, low-latency WebRTC video connections directly with industry mentors.
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
            <p className="text-white/40 text-xs mt-4 leading-relaxed">Share this ID securely with a mentor to receive incoming calls.</p>
          </div>

          {/* Connect Card */}
          <div className="liquid-glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Dial Peer</h3>
            <div className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Enter Peer ID..." 
                value={otherPeerId} 
                onChange={(e) => setOtherPeerId(e.target.value)} 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <button 
                onClick={startCall} 
                className="w-full bg-emerald-500/10 text-emerald-400 font-medium py-3 rounded-xl hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2 border border-emerald-500/20 hover:border-emerald-500/30"
              >
                <Video className="w-4 h-4" /> Start Video Call
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

        {/* Right Column: Video Feeds */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="liquid-glass p-4 rounded-3xl border border-white/10 h-full flex flex-col relative min-h-[500px]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 mb-4">
              <MonitorPlay className="w-5 h-5 text-white/60" />
              <h2 className="text-lg text-white font-medium">Live Feed</h2>
              <span className="ml-auto flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> End-to-End Encrypted
              </span>
            </div>

            {/* Video Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
              <div className="relative rounded-2xl overflow-hidden bg-black/60 border-2 border-white/20 aspect-video flex items-center justify-center shadow-inner group">
                <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 -z-20">
                  <Video className="w-12 h-12 mb-3 opacity-20" />
                  <span className="text-sm font-medium tracking-wide">Initializing Camera...</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Users className="w-3.5 h-3.5 text-white/70" />
                  <span className="text-xs text-white/90 font-medium">You</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-black/60 border-2 border-emerald-500/30 aspect-video flex items-center justify-center shadow-inner group shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover relative z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 z-0">
                  <Video className="w-12 h-12 mb-3 opacity-20" />
                  <span className="text-sm font-medium tracking-wide">Awaiting Connection...</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-white/90 font-medium">Remote Peer</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
