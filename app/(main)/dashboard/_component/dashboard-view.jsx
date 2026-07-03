"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Progress } from "../../../../components/ui/progress";

const DashboardView = ({ insights }) => {
  // Transform salary data for the chart
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]";
      case "medium":
        return "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]";
      case "low":
        return "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]";
      default:
        return "bg-slate-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" };
      case "neutral":
        return { icon: LineChart, color: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" };
      case "negative":
        return { icon: TrendingDown, color: "text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]" };
      default:
        return { icon: LineChart, color: "text-slate-400" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  // Format dates using date-fns
  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <Badge variant="outline" className="border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 text-sm">
          <span className="text-emerald-400 mr-2">●</span>
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="liquid-glass border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-500 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-white/70">
              Market Outlook
            </CardTitle>
            <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
              <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-light tracking-tight text-white mb-1">{insights.marketOutlook}</div>
            <p className="text-xs text-white/50">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card className="liquid-glass border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-500 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-white/70">
              Industry Growth
            </CardTitle>
            <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
              <TrendingUp className="h-4 w-4 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-light tracking-tight text-white mb-3">
              {insights.growthRate.toFixed(1)}%
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                style={{ width: `${Math.min(100, Math.max(0, insights.growthRate * 5))}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="liquid-glass border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-500 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-white/70">Demand Level</CardTitle>
            <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
              <BriefcaseIcon className="h-4 w-4 text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-light tracking-tight text-white mb-3">{insights.demandLevel}</div>
            <div
              className={`h-1.5 w-full rounded-full mt-2 transition-all duration-1000 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </CardContent>
        </Card>

        <Card className="liquid-glass border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-500 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-white/70">Top Skills</CardTitle>
            <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
              <Brain className="h-4 w-4 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2 pt-1">
              {insights.topSkills.slice(0, 4).map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 border-white/10 text-white/80 font-normal whitespace-normal text-left h-auto py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Ranges Chart */}
      <Card className="liquid-glass border-white/10">
        <CardHeader className="pb-8">
          <CardTitle className="text-xl font-light text-white">Salary Ranges by Role</CardTitle>
          <CardDescription className="text-white/50">
            Displaying minimum, median, and maximum salaries (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="rgba(255,255,255,0.3)"
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.3)"
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl">
                          <p className="font-medium text-white mb-3">{label}</p>
                          {payload.map((item) => (
                            <div key={item.name} className="flex items-center justify-between gap-6 mb-1.5 last:mb-0">
                              <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-sm text-white/70">{item.name}</span>
                              </div>
                              <span className="text-sm font-medium text-white">${item.value}k</span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#38bdf8" name="Min Salary" radius={[4, 4, 0, 0]} />
                <Bar dataKey="median" fill="#8b5cf6" name="Median Salary" radius={[4, 4, 0, 0]} />
                <Bar dataKey="max" fill="#10b981" name="Max Salary" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends & Recommended Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="liquid-glass border-white/10 hover:border-white/20 transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-xl font-light text-white">Key Industry Trends</CardTitle>
            <CardDescription className="text-white/50">
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-5">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <TrendingUp className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white/80 leading-relaxed pt-1">{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="liquid-glass border-white/10 hover:border-white/20 transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-xl font-light text-white">Recommended Skills</CardTitle>
            <CardDescription className="text-white/50">Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {insights.recommendedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border-white/10 text-white/80 font-normal hover:border-white/30 transition-all text-sm rounded-xl whitespace-normal text-left h-auto"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;