import React from "react";

const services = [
  {
    title: "Secure Storage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde ipsa cupiditate placeat aspernatur autem asperiores rerum magnam pariatur laborum sapiente odit nostrum vitae, libero voluptates accusantium vel fuga? Velit, harum.",
  },
  {
    title: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde ipsa cupiditate placeat aspernatur autem asperiores rerum magnam pariatur laborum sapiente odit nostrum vitae, libero voluptates accusantium vel fuga? Velit, harum.",
  },
  {
    title: "Exchange Service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde ipsa cupiditate placeat aspernatur autem asperiores rerum magnam pariatur laborum sapiente odit nostrum vitae, libero voluptates accusantium vel fuga? Velit, harum.",
  },
  {
    title: "Investment Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde ipsa cupiditate placeat aspernatur autem asperiores rerum magnam pariatur laborum sapiente odit nostrum vitae, libero voluptates accusantium vel fuga? Velit, harum.",
  },
  {
    title: "Credit Cart Use",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde ipsa cupiditate placeat aspernatur autem asperiores rerum magnam pariatur laborum sapiente odit nostrum vitae, libero voluptates accusantium vel fuga? Velit, harum.",
  },
  {
    title: "Planing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde ipsa cupiditate placeat aspernatur autem asperiores rerum magnam pariatur laborum sapiente odit nostrum vitae, libero voluptates accusantium vel fuga? Velit, harum.",
  },
];

const Service = () => {
  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas asperiores nisi impedit quis? Eveniet voluptate
                expedita veniam sint dolorem provident accusamus maxime alias
                non obcaecati! Voluptatem aliquam harum exercitationem corporis.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div
                className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${1 + i}s`}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
