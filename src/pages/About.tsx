import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Track Expenses",
      description: "Keep track of all your personal and shared expenses in one place",
    },
    {
      icon: Users,
      title: "Shared Budgets",
      description: "Collaborate with roommates or family members on shared expenses",
    },
    {
      icon: TrendingUp,
      title: "Financial Insights",
      description: "Get real-time insights into your spending patterns and balance",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is encrypted and stored securely",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-foreground">
          About Budget Tracker
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A simple and powerful tool to help you manage your personal finances
          and shared expenses with ease.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="bg-gradient-to-br from-primary to-primary/60 p-3 rounded-lg h-fit">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Mission Statement */}
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe managing money shouldn't be complicated. Budget Tracker
            is designed to make expense tracking simple, intuitive, and
            accessible for everyone. Whether you're managing personal expenses
            or splitting costs with others, we've got you covered.
          </p>
        </div>
      </Card>

      {/* Footer */}
      <div className="text-center py-8 border-t">
        <p className="text-muted-foreground">
          App Published by{" "}
          <span className="font-semibold text-foreground">Naga Sekhar Madala</span>
        </p>
      </div>
    </div>
  );
};

export default About;
