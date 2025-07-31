import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const submitMessage = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Mensaje enviado",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitMessage.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-light/50 to-pink-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-4">
            Ponte en <span className="text-fuchsia-custom">Contacto</span>
          </h2>
          <p className="text-lg text-gray-soft max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o te interesa un producto personalizado? Nos encantaría escucharte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-black-soft">Nombre</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu nombre" 
                              className="rounded-xl focus:ring-2 focus:ring-fuchsia-custom"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-black-soft">Apellido</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu apellido" 
                              className="rounded-xl focus:ring-2 focus:ring-fuchsia-custom"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-black-soft">Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="tu@email.com" 
                            className="rounded-xl focus:ring-2 focus:ring-fuchsia-custom"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-black-soft">Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+57 300 123 4567" 
                            className="rounded-xl focus:ring-2 focus:ring-fuchsia-custom"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-black-soft">Asunto</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl focus:ring-2 focus:ring-fuchsia-custom">
                              <SelectValue placeholder="Selecciona un asunto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="producto">Consulta sobre producto</SelectItem>
                            <SelectItem value="personalizado">Producto personalizado</SelectItem>
                            <SelectItem value="mayorista">Ventas mayoristas</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-black-soft">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Cuéntanos en qué podemos ayudarte..." 
                            className="rounded-xl focus:ring-2 focus:ring-fuchsia-custom resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={submitMessage.isPending}
                    className="w-full bg-fuchsia-custom hover:bg-fuchsia-custom/90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {submitMessage.isPending ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black-soft mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-fuchsia-custom/10 p-3 rounded-full">
                      <MapPin className="text-fuchsia-custom text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black-soft">Ubicación</h4>
                      <p className="text-gray-soft">Bogotá, Colombia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-fuchsia-custom/10 p-3 rounded-full">
                      <Phone className="text-fuchsia-custom text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black-soft">Teléfono</h4>
                      <p className="text-gray-soft">+57 300 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-fuchsia-custom/10 p-3 rounded-full">
                      <Mail className="text-fuchsia-custom text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black-soft">Email</h4>
                      <p className="text-gray-soft">info@artesanias.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-fuchsia-custom/10 p-3 rounded-full">
                      <Clock className="text-fuchsia-custom text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black-soft">Horarios</h4>
                      <p className="text-gray-soft">Lun - Vie: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-soft">Sáb: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black-soft mb-6">Síguenos</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-fuchsia-custom/10 hover:bg-fuchsia-custom/20 p-4 rounded-full transition-colors duration-300"
                  >
                    <Instagram className="text-fuchsia-custom text-xl" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-fuchsia-custom/10 hover:bg-fuchsia-custom/20 p-4 rounded-full transition-colors duration-300"
                  >
                    <Facebook className="text-fuchsia-custom text-xl" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-fuchsia-custom/10 hover:bg-fuchsia-custom/20 p-4 rounded-full transition-colors duration-300"
                  >
                    <MessageCircle className="text-fuchsia-custom text-xl" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
