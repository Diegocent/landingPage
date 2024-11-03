import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Home = () => {
  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold">Simplify Your Workflow</h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground">
            Streamline your tasks and boost productivity with our intuitive
            platform.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground">
            Join thousands of satisfied users and transform your productivity
            today.
          </p>
          <form className="flex justify-center max-w-md gap-4 mx-auto">
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
