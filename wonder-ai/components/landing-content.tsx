"use client";

import { Item } from "@radix-ui/react-select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "Best AI tool ever",
  },
  {
    name: "John",
    avatar: "A",
    title: "Software Engineer",
    description: "10/10! Highly recommend this AI Generator",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "Best AI tool ever",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "Best AI tool ever",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-10">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10 ">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:-cols-3 l:grid-cols- gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
