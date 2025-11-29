import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { LogOut, User, CheckCircle2, University, FileText, Trophy, Bell } from "lucide-react";
import type { User as SupabaseUser } from '@supabase/supabase-js';

const StudentPortal = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate('/auth');
      return;
    }

    setUser(user);
    loadProfile(user.id);
  };

  const loadProfile = async (userId: string) => {
    setLoading(true);
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    
    setProfile(data);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate('/');
  };

  const completionPercentage = profile?.profile_completion_percent || 0;

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Student Portal | Abroad Academics</title>
        <meta name="description" content="Your study abroad dashboard" />
      </Helmet>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <University className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Student Portal</h1>
              <p className="text-sm text-muted-foreground">{profile?.full_name || user?.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleSignOut}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Completion Banner */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <div className="flex items-center gap-4 mb-3">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Profile Completion</h2>
              <p className="text-sm text-muted-foreground">Complete your profile to unlock all features</p>
            </div>
            <span className="text-3xl font-bold text-primary">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-semibold">Eligible Countries</h3>
                </div>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-2">Countries you can apply to</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <University className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-semibold">Matched Universities</h3>
                </div>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-2">Universities matching your profile</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <h3 className="text-xl font-semibold">Scholarships</h3>
                </div>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-2">Available scholarships</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Getting Started
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <User className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Complete Your Profile</h4>
                    <p className="text-sm text-muted-foreground">Add your academic details, test scores, and preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Check Eligibility</h4>
                    <p className="text-sm text-muted-foreground">See which countries and programs you're eligible for</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <University className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Browse Universities</h4>
                    <p className="text-sm text-muted-foreground">Explore universities and programs matching your profile</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="eligibility">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Eligibility Checker</h3>
              <p className="text-muted-foreground">Complete your profile to check your eligibility for different countries and programs.</p>
            </Card>
          </TabsContent>

          <TabsContent value="universities">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">University Matches</h3>
              <p className="text-muted-foreground">Universities will appear here once you complete your profile.</p>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">My Applications</h3>
              <p className="text-muted-foreground">Track your university applications here.</p>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <p className="text-lg">{profile?.full_name || "Not set"}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-lg">{profile?.email || user?.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                  <p className="text-lg">{profile?.phone_number || "Not set"}</p>
                </div>
                <Button className="mt-4">Edit Profile</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentPortal;