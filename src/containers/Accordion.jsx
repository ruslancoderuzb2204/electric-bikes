import { Collapse } from "antd";
const { Panel } = Collapse;

const items = [
  {
    key: "1",
    label: "Skuterlarni ijaraga olish uchun qanday hujjatlar kerak? ",
    content:
      "Ijara shartnomasi uchun, shaxsni tasdiqlovchi hujjat (passport), kurierlar sumkasi kodi va ijara uchun tanlagan skuteringizga qarab depozit summasi kerak bo’ladi.",
  },
  {
    key: "2",
    label: "Nasiya savdoga qanday qilib skuter olish mumkin? ",
    content:
      "Nasiya savdoga skuter harid qilish uchun, hamkorlarimiz uzum nasiya, zoodpay yoki anor bank platformalaridan ro’yxatdan o’tishingiz lozim. Plastik kartadagi pul aylanmasiga qarab sizga limit ajratiladi va ushbu limit orqali mahsulotimizni 12 oygacha muddatli to’lovga harid qilishingiz mumkin bo’ladi.",
  },
  {
    key: "3",
    label: "Yetkazib berish hizmati mavjudmi?  ",
    content:
      "Siz barcha mahsulotlarimizni O’zbekiston va Qoraqalpog’iston respublikalarining istalgan hududidan turib xarid qilishingiz mumkin. Sizga qisqa vaqt ichida, asl holatida yetkazib beramiz.",
  },
];

const Accordion = () => (
  <section className="container accordion bg-[#404040]">
    <div className="py-32 md:py-16 sm:py-12 xs:py-6">
      <div className="pb-12 md:pb-8 sm:pb-6 xs:pb-4">
        <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-white">
          KO'P BERILADIGAN SAVOLLAR
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
