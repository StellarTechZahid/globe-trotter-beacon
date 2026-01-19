import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut, Users, University, FileText, Trophy, BarChart, Settings } from "lucide-react";

const AdminPortal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalApplications: 0,
    totalUniversities: 0,
    pendingReviews: 0
  });

  useEffect(() => {
    checkAdminAuth();
  }, []);

  const checkAdminAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate('/auth');
      return;
    }

    // Check if user has admin role
    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .maybeSingle();

    if (roleData?.role !== 'admin') {
      toast.error("Access denied. Admin privileges required.");
      navigate('/student-portal');
      return;
    }

    loadStats();
  };

  const loadStats = async () => {
    setLoading(true);
    
    const [students, applications, universities, documents] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('applications').select('id', { count: 'exact', head: true }),
      supabase.from('universities').select('id', { count: 'exact', head: true }),
      supabase.from('application_documents').select('id', { count: 'exact', head: true }).eq('status', 'pending')
    ]);

    setStats({
      totalStudents: students.count || 0,
      totalApplications: applications.count || 0,
      totalUniversities: universities.count || 0,
      pendingReviews: documents.count || 0
    });
    
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Admin Portal | Abroad Academics</title>
        <meta name="description" content="Manage students and applications" />
      </Helmet>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Admin Portal</h1>
              <p className="text-sm text-muted-foreground">Management Dashboard</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleSignOut}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-8 w-8 text-blue-500" />
              <h3 className="text-lg font-semibold">Total Students</h3>
            </div>
            <p className="text-4xl font-bold">{stats.totalStudents}</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-8 w-8 text-green-500" />
              <h3 className="text-lg font-semibold">Applications</h3>
            </div>
            <p className="text-4xl font-bold">{stats.totalApplications}</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <University className="h-8 w-8 text-purple-500" />
              <h3 className="text-lg font-semibold">Universities</h3>
            </div>
            <p className="text-4xl font-bold">{stats.totalUniversities}</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="h-8 w-8 text-orange-500" />
              <h3 className="text-lg font-semibold">Pending Reviews</h3>
            </div>
            <p className="text-4xl font-bold">{stats.pendingReviews}</p>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="students">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Student Management</h3>
                <Button>View All Students</Button>
              </div>
              <p className="text-muted-foreground">Manage student profiles, applications, and eligibility assessments.</p>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Application Management</h3>
                <Button>Review Applications</Button>
              </div>
              <p className="text-muted-foreground">Review and manage student applications, documents, and progress.</p>
            </Card>
          </TabsContent>

          <TabsContent value="universities">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">University Database</h3>
                <Button>Add University</Button>
              </div>
              <p className="text-muted-foreground">Manage universities, programs, requirements, and partnerships.</p>
            </Card>
          </TabsContent>

          <TabsContent value="scholarships">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Scholarship Management</h3>
                <Button>Add Scholarship</Button>
              </div>
              <p className="text-muted-foreground">Manage scholarship opportunities and eligibility criteria.</p>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
              </div>
              <p className="text-muted-foreground">View application trends, success rates, and performance metrics.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;