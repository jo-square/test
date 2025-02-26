import type { Template } from "tinacms";
const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

type Example2Type = {
  text_0: string;
  text_1: string;
  links: typeof links;
  text_3: string;
  stats: typeof stats;
};
export default function Example2(props: Example2Type) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {props.text_0}
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            {props.text_1}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {props.links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">{props.text_3}</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {props.stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export const Example2Block: Template = {
  name: "example2",
  label: "Example2",
  ui: {
    previewSrc: "",
    defaultItem: {
      text_0: "Work with us",
      text_1:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
      links: links,
      text_3: "\u2192",
      stats: stats,
    },
  },
  fields: [
    {
      type: "string",
      label: "text 0",
      name: "text_0",
      required: true,
    },
    {
      type: "string",
      label: "text 1",
      name: "text_1",
      required: true,
    },
    {
      type: "object",
      label: "links",
      name: "links",
      list: true,
      required: true,
      fields: [
        {
          type: "string",
          label: "name",
          name: "name",
          list: false,
          required: true,
        },
        {
          type: "string",
          label: "href",
          name: "href",
          list: false,
          required: true,
        },
      ],
    },
    {
      type: "string",
      label: "text 3",
      name: "text_3",
      required: true,
    },
    {
      type: "object",
      label: "stats",
      name: "stats",
      list: true,
      required: true,
      fields: [
        {
          type: "string",
          label: "name",
          name: "name",
          list: false,
          required: true,
        },
        {
          type: "string",
          label: "value",
          name: "value",
          list: false,
          required: true,
        },
      ],
    },
  ],
};
