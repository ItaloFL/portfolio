import { ReactNode, useEffect, useRef } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
};

export function RevealOnScroll({ children }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="opacity-0 translate-y-5 transition-all duration-500 ease-in">
      {children}
    </div>
  );
}
