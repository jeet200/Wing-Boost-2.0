"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, MessageCircle, Users, ShoppingBag, Shield } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const services = [
    {
      title: "Shop",
      description: "Premium digital products and services",
      url: "https://wingboost.sellpass.io/products",
      icon: ShoppingBag,
      gradient: "from-purple-500 to-pink-500",
      delay: "0ms",
    },
    {
      title: "Telegram",
      description: "Join our community for updates and support",
      url: "https://t.me/wingboost",
      icon: MessageCircle,
      gradient: "from-blue-500 to-cyan-500",
      delay: "100ms",
    },
    {
      title: "Discord",
      description: "Connect with our gaming community",
      url: "https://discord.gg/wingboost",
      icon: Users,
      gradient: "from-indigo-500 to-purple-500",
      delay: "200ms",
    },
    {
      title: "Gold MM ",
      description: "Secure trading and exchange services",
      url: "https://goldmm.one/",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      delay: "300ms",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent tracking-tight">
                WingBoost
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your gateway to premium digital services, community, and secure trading
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                      <Link href={service.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group-hover:shadow-lg"
                        >
                          Visit <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
                  ></div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>All services are live and ready to use</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
