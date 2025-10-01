import { DollarSign, Users, PieChart, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
  isShared: boolean;
}

const expenses: Expense[] = [
  {
    id: 1,
    title: "Grocery Shopping",
    amount: 125.50,
    category: "Groceries",
    date: "2025-09-28",
    isShared: true,
  },
  {
    id: 2,
    title: "Electricity Bill",
    amount: 89.00,
    category: "Bills",
    date: "2025-09-27",
    isShared: true,
  },
  {
    id: 3,
    title: "Coffee Shop",
    amount: 12.75,
    category: "Food & Drink",
    date: "2025-09-26",
    isShared: false,
  },
  {
    id: 4,
    title: "Internet Bill",
    amount: 65.00,
    category: "Bills",
    date: "2025-09-25",
    isShared: true,
  },
  {
    id: 5,
    title: "Lunch",
    amount: 18.50,
    category: "Food & Drink",
    date: "2025-09-24",
    isShared: false,
  },
];

const Dashboard = () => {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const sharedExpenses = expenses
    .filter((exp) => exp.isShared)
    .reduce((sum, exp) => sum + exp.amount, 0);
  const balance = 1000 - totalExpenses;

  const stats = [
    {
      title: "Total Expenses",
      value: `$${totalExpenses.toFixed(2)}`,
      icon: DollarSign,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Shared Expenses",
      value: `$${sharedExpenses.toFixed(2)}`,
      icon: Users,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Balance",
      value: `$${balance.toFixed(2)}`,
      icon: PieChart,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`bg-gradient-to-br ${stat.gradient} p-3 rounded-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Expenses List */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Expenses
          </h2>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Expense
          </Button>
        </div>

        <div className="space-y-3">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground">{expense.title}</p>
                  {expense.isShared && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      Shared
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-sm text-muted-foreground">
                    {expense.category}
                  </p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-sm text-muted-foreground">
                    {new Date(expense.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className="text-lg font-semibold text-foreground">
                ${expense.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
