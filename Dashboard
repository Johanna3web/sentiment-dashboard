import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { FileText, Smile, Meh, Frown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MetricCard from "../components/dashboard/MetricCard";
import SentimentPieChart from "../components/dashboard/SentimentPieChart";
import SentimentBarChart from "../components/dashboard/SentimentBarChart";
import SentimentTimelineChart from "../components/dashboard/SentimentTimelineChart";

export default function Dashboard() {
  const { data: records = [], isLoading } = useQuery({
    queryKey: ["sentimentData"],
    queryFn: () => base44.entities.SentimentData.list("-created_date"),
    initialData: []
  });

  const stats = {
    total: records.length,
    positive: records.filter(r => r.sentiment === "Positive").length,
    neutral: records.filter(r => r.sentiment === "Neutral").length,
    negative: records.filter(r => r.sentiment === "Negative").length
  };

  const positivePercentage = stats.total > 0 ? ((stats.positive / stats.total) * 100).toFixed(1) : 0;
  const neutralPercentage = stats.total > 0 ? ((stats.neutral / stats.total) * 100).toFixed(1) : 0;
  const negativePercentage = stats.total > 0 ? ((stats.negative / stats.total) * 100).toFixed(1) : 0;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Track sentiment analysis metrics and insights</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Texts Analyzed"
          value={stats.total}
          icon={FileText}
          bgColor="#00897B"
          textColor="#00897B"
        />
        <MetricCard
          title="Positive Sentiments"
          value={stats.positive}
          icon={Smile}
          bgColor="#00C853"
          textColor="#00C853"
          percentage={positivePercentage}
        />
        <MetricCard
          title="Neutral Sentiments"
          value={stats.neutral}
          icon={Meh}
          bgColor="#FFD600"
          textColor="#F57C00"
          percentage={neutralPercentage}
        />
        <MetricCard
          title="Negative Sentiments"
          value={stats.negative}
          icon={Frown}
          bgColor="#D50000"
          textColor="#D50000"
          percentage={negativePercentage}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle>Sentiment Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <SentimentPieChart data={stats} />
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle>Sentiment Counts</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <SentimentBarChart data={stats} />
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle>Sentiment Timeline</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <SentimentTimelineChart records={records} />
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle>Quick Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Most Common Sentiment</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {stats.positive >= stats.neutral && stats.positive >= stats.negative ? "Positive 😊" :
                 stats.negative >= stats.neutral ? "Negative 😠" : "Neutral 😐"}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Average Confidence</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {records.length > 0 ? 
                  ((records.reduce((sum, r) => sum + r.score, 0) / records.length) * 100).toFixed(1) : 0}%
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Latest Analysis</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {records.length > 0 ? new Date(records[0].created_date).toLocaleDateString() : "N/A"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
