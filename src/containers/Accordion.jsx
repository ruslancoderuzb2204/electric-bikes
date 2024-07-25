import { Collapse } from "antd";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "What kind of E-bike models do you have? ",
    content: text,
  },
  {
    key: "2",
    label: "What kind of E-bike models do you have? ",
    content: text,
  },
  {
    key: "3",
    label: "What kind of E-bike models do you have? ",
    content: text,
  },
  {
    key: "4",
    label: "What kind of E-bike models do you have? ",
    content: text,
  },
];

const Accordion = () => (
  <section className="container accordion bg-[#404040]">
    <div className="py-32 md:py-16 sm:py-12 xs:py-6">
      <div className="pb-12 md:pb-8 sm:pb-6 xs:pb-4">
        <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-white">
          MOST ASKED QUESTIONS
        </h2>
      </div>
      <Collapse
        size="large"
        style={{ background: "#4E4F53", color: "white" }}
        expandIconPosition="end"
        className="grid grid-cols-2 sm:grid-cols-1 gap-4 text-white"
        ghost
      >
        {items.map((item) => (
          <Panel header={item.label} key={item.key} className="text-white">
            <p className="text-white w-4/5 sm:w-full">{item.content}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  </section>
);

export default Accordion;
