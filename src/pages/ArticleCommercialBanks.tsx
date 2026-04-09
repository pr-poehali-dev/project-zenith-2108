import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArticleCommercialBanks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Button
          variant="ghost"
          className="text-zinc-400 hover:text-white mb-8 -ml-2"
          onClick={() => navigate("/")}
        >
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          На главную
        </Button>

        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-white/10 rounded-full px-4 py-1 mb-6">
          <Icon name="Building2" size={16} className="text-blue-400" />
          <span className="text-sm text-zinc-400">Основа</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Коммерческие банки: как они зарабатывают и зачем нужны
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Коммерческий банк — это бизнес. Он привлекает деньги от одних и выдаёт кредиты другим,
          зарабатывая на разнице процентов.
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Как банк зарабатывает деньги?</h2>
            <p>
              Основная модель проста: банк принимает вклады под 5% годовых и выдаёт кредиты
              под 15%. Разница в 10% — это банковская маржа, основной источник дохода.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-5">
                <p className="text-zinc-500 text-sm mb-1">Банк платит вкладчику</p>
                <p className="text-2xl font-bold text-green-400">5%</p>
                <p className="text-zinc-400 text-sm mt-1">за хранение денег</p>
              </div>
              <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-5">
                <p className="text-zinc-500 text-sm mb-1">Банк получает с заёмщика</p>
                <p className="text-2xl font-bold text-red-400">15%</p>
                <p className="text-zinc-400 text-sm mt-1">за выданный кредит</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Что такое депозит (вклад)?</h2>
            <p>
              Когда вы кладёте деньги в банк — вы фактически даёте банку кредит. Банк пользуется
              вашими деньгами и платит вам за это проценты.
            </p>
            <p className="mt-4">
              Вклады бывают срочными (деньги заморожены на определённый срок, ставка выше)
              и до востребования (можно забрать в любой момент, ставка ниже).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Виды кредитования</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Ипотека",
                  text: "Кредит на покупку недвижимости. Долгосрочный — до 30 лет. Залогом служит сама квартира.",
                },
                {
                  title: "Потребительский кредит",
                  text: "Деньги на любые цели: ремонт, бытовая техника, отпуск. Ставка выше ипотеки, срок меньше.",
                },
                {
                  title: "Кредитная карта",
                  text: "Возобновляемый кредитный лимит. Удобна для ежедневных трат, если гасить в льготный период.",
                },
                {
                  title: "Кредиты бизнесу",
                  text: "На развитие, оборотный капитал, оборудование. Один из главных источников финансирования компаний.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900/60 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Межбанковский рынок</h2>
            <p>
              Банки одалживают деньги друг другу — это межбанковский рынок. Если у банка
              временно не хватает ликвидности, он берёт деньги у другого банка на короткий срок.
            </p>
            <p className="mt-4">
              Ставка на этом рынке (RUONIA в России) тесно связана с ключевой ставкой ЦБ
              и отражает реальную стоимость денег в экономике.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Банковская лицензия</h2>
            <p>
              Без лицензии ЦБ организация не может называться банком и принимать вклады от
              населения. Получить лицензию непросто — нужно выполнить требования по капиталу,
              системам управления рисками и многое другое.
            </p>
            <div className="mt-6 bg-blue-950/40 border border-blue-500/20 rounded-xl p-5">
              <p className="text-blue-300 font-medium">
                Проверить, есть ли у банка лицензия, можно на сайте cbr.ru — в реестре
                кредитных организаций.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-zinc-500 text-sm">Образовательный материал · БанкБаза</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCommercialBanks;
