'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Plus, Search, GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to show-schools page after a brief moment
    const timer = setTimeout(() => {
      router.push('/show-schools');
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full shadow-lg">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            School Directory
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover and explore educational institutions in your area. Find the perfect school for your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/show-schools">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Schools
              </Button>
            </Link>
            <Link href="/add-school">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add School
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-blue-100 rounded-full w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Discover Schools</CardTitle>
              <CardDescription>
                Browse through our comprehensive directory of educational institutions
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/show-schools">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View All Schools
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-emerald-100 rounded-full w-fit mb-4 group-hover:bg-emerald-200 transition-colors">
                <Plus className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Register School</CardTitle>
              <CardDescription>
                Add your school to our directory and help others discover it
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/add-school">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Add New School
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-orange-100 rounded-full w-fit mb-4 group-hover:bg-orange-200 transition-colors">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Quality Education</CardTitle>
              <CardDescription>
                Connect with top-rated educational institutions in your region
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Quality Education</h3>
              <p className="text-gray-600">Connecting students with excellent educational opportunities</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Community Driven</h3>
              <p className="text-gray-600">Built by educators and parents for the community</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <School className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Comprehensive</h3>
              <p className="text-gray-600">Complete information about schools in your area</p>
            </div>
          </div>
        </div>

        {/* Auto-redirect notice */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            Redirecting to school directory...
          </div>
        </div>
      </div>
    </div>
  );
}