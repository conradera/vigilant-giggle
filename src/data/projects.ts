export interface Project {
  title: string;
  location: string;
  category: string;
  badge: string;
  badgeColor: string;
  img: string;
  gridClass: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Centenary Bank — Various Branches",
    location: "Kampala & Regional Branches",
    category: "Commercial",
    badge: "Banking & Finance",
    badgeColor: "bg-flame-gold text-deep-forest",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm-PCYQbZR77uIzmxRu9-lJg0VVrWSgP4vAbY11z-DBmonXmjhr6iEhkaTDYo205JLgrpofAq6Nh0Dq4SkwTBjk168ylscOULaMsdM24nNmiZ_r8DXcubU6lQGnWb0C9gM62Vic0Unfqc_ptU_CMMtIyPMFtGmwTCsYdJjaNjy87QpwZ8NLFiv2hRhbbuKeBsBuXPjA9KNoTz7GHulqGiU8JqOWhrxFAYIkxVPc5CfAOiAoJV4LONqwD6Vi-iisMgV-vJVaV8upA",
    gridClass: "lg:col-span-8 h-[500px]",
    slug: "centenary-bank",
  },
  {
    title: "National Water & Sewerage Corporation",
    location: "Kampala & Regional Offices",
    category: "Commercial",
    badge: "Government Infrastructure",
    badgeColor: "bg-royal-purple text-white",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgFOfzQSKbcQI9z93kfhM8YRX7PcFDbySi6PhD3p2KPkZSkFzprj72KMFuHvn3_QqB5NU9h4z4DlwwvAT9fHnB7W4t96tsuMJjukTj_j_0Ruvi1Ni6P4q48CXt7u3WoL1V6VIE9EFcuTAN9Q7j4wJaUDi9uT6O5u_ixvvneWPf4W0Yrkj2oOOlVb1ceNwaOP9kcI-Rt5Hht0RGd4v6a0Ckdze0cPwHMTtGcrAQmydY1S-o5faLgmiqeFzriA2LIaS1JzavAu6FQ",
    gridClass: "lg:col-span-4 h-[500px]",
    slug: "nwsc",
  },
  {
    title: "Seed Schools Programme — Various Schools",
    location: "Multiple Locations Nationwide",
    category: "Institutional",
    badge: "Government of Uganda",
    badgeColor: "bg-leaf-green text-white",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_GHcZiGEk0cNNNuYRkoayzGb4jF38pF3wW0kEcCVom21rDXEfCoemTE2Nx7xsVORqxY5xeRedwlyh-iqiCdqKfuvHXQaBSgzHxW49hn7_P0lKxGJfTznuIAgRQEFd71R_fzwZPKZ7daN--Y_usiIJaN_CxUTRHEl-dhZYc-UkJpd1zeM_miEibm6oAKQGK5kJL3N91jyG4QKJMHwle7_a9jW5eKEVRbzD_s9tHxpi9bwcw4cu7N9SRurBpfMcNfkx_jDV3VQrkA",
    gridClass: "lg:col-span-4 h-[400px]",
    slug: "seed-schools",
  },
  {
    title: "Ministry of Health Facilities",
    location: "Various Health Centres, Uganda",
    category: "Institutional",
    badge: "Healthcare Infrastructure",
    badgeColor: "bg-flame-gold text-deep-forest",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoEukqkyepxfcJVdlj7Oup-A7122drkryh38UYSDSzYxVGN6VaORjv_GOilQpVezMaNtdv_Iub8H1rJy2vfpS9m0CpS2fMzRjpxXMDA7uor32LFj5jXiLdxS1o2Ya9_8Uf0-b2HlOKBXw4t_SPkmSA7013_8YS-3jN-q3zEeN61AUw7SwPxTj9K7tMqB1vXe4GoYqBPsHI5dQU8rllyj9VGbtMZIMw3BO0zFm0It5y5ZuwP93A1jWgoqsXpS3kWfr0cuWd3jZY2Q",
    gridClass: "lg:col-span-8 h-[400px]",
    slug: "moh-facilities",
  },
  {
    title: "Educational Institutions — Various Schools",
    location: "Multiple Locations",
    category: "Institutional",
    badge: "Education Sector",
    badgeColor: "bg-royal-purple text-white",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2gVLeikknLwJdDDdA6gmA5DlBaOoQKV50XoFbLlXxtRYPMtWe9zNvRKJpf8KPWuuLy6DBsL4BiPADitrQmPyoGbL9FFniG1q1Pw9UffjD4JpeUtThUcyfGEiGs2t8hQP-K2dV7nksnx0Zkw28ttjWmBDTod-RsZ7n06nKHyL7QDLgNRrvY8BVZG4GIeMp5jd6JtxVkd9lIbb25dDmRC9EJF_r4_gAVcoDCCaT6Owt7yxEezf90msDjlhbzQgyMbG3q9cTwFtaQ",
    gridClass: "lg:col-span-6 h-[450px]",
    slug: "educational-institutions",
  },
  {
    title: "Residential Estates — Various Developments",
    location: "Kampala & Regional Towns",
    category: "Residential",
    badge: "Housing Development",
    badgeColor: "bg-leaf-green text-white",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc4T7JthSQJDY3O3WKVw5YJtSS6ucBJIcZUw_9Q8sUQ-MbrYyvtaS8SErhjTbfmYx8xJznHGjPU1QFB9zcS-cddNsuJ3Sc5QseNc_h0Rv4jQB4r7aSdOCuUrFlDuAIH-iSS9A18OmZD9G50cIDTzF0ocFmqJLJMuxN1PRKNg8ynP_ewfEpzjj8FrK9PJs77_BQ7haym61N0NIwJGujzCYBXk7uc2MiRNcmlI59IcBWcujWv8Bih9qkN74wa-Rpx6Z2k4Kw7kU1DA",
    gridClass: "lg:col-span-6 h-[450px]",
    slug: "residential-estates",
  },
];
