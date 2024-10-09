import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from "react-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Home = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Simplify Your Workflow</h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Streamline your tasks and boost productivity with our intuitive
            platform.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Effortless Organization",
              "Smart Automation",
              "Seamless Collaboration",
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enhance your workflow with our {feature.toLowerCase()} tools
                    designed for maximum efficiency.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users and transform your productivity
            today.
          </p>
          <form className="flex justify-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </section>
    </>
  );
};
