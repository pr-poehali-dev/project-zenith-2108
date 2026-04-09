import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArticleCentralBank = () => {
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
          <Icon name="Landmark" size={16} className="text-blue-400" />
          <span className="text-sm text-zinc-400">Фундамент</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Центральный банк: зачем он нужен и как работает
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Центральный банк — это не обычный банк. Он не выдаёт кредиты людям и не принимает
          вклады. Его задача — управлять всей финансовой системой страны.
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Что такое Центральный банк?</h2>
            <p>
              Центральный банк (в России — Банк России) — это главный финансовый регулятор
              страны. Он стоит над всеми остальными банками и следит за тем, чтобы финансовая
              система работала стабильно.
            </p>
            <p className="mt-4">
              Если коммерческие банки — это магазины, то Центральный банк — это и поставщик
              товара (денег), и надзорный орган, который следит за порядком в торговле.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Главные функции</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Эмиссия денег",
                  text: "Только Центральный банк имеет право выпускать наличные деньги — печатать купюры и чеканить монеты. Это монопольное право закреплено законом.",
                },
                {
                  title: "Ключевая ставка",
                  text: "Центральный банк устанавливает ключевую ставку — процент, под который он кредитует коммерческие банки. Чем выше ставка, тем дороже кредиты для всех, тем меньше люди берут в долг и тем ниже инфляция.",
                },
                {
                  title: "Надзор за банками",
                  text: "ЦБ выдаёт банкам лицензии и может их отозвать. Он проверяет, соблюдают ли банки нормативы, не рискуют ли чрезмерно деньгами вкладчиков.",
                },
                {
                  title: "Валютная политика",
                  text: "ЦБ управляет золотовалютными резервами страны и может влиять на курс рубля, покупая или продавая валюту на бирже.",
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
            <h2 className="text-2xl font-bold text-white mb-4">Как ключевая ставка влияет на вашу жизнь?</h2>
            <p>
              Когда ЦБ поднимает ставку, банки берут деньги дороже — и выдают кредиты дороже.
              Ипотека дорожает, потребительские кредиты дорожают. Люди меньше тратят и берут
              меньше в долг. Это охлаждает экономику и снижает инфляцию.
            </p>
            <p className="mt-4">
              Когда ставка снижается — кредиты дешевеют, люди охотнее берут ипотеку и бизнес
              инвестирует. Экономика разгоняется, но инфляция может вырасти.
            </p>
            <div className="mt-6 bg-blue-950/40 border border-blue-500/20 rounded-xl p-5">
              <p className="text-blue-300 font-medium">
                Пример: если ключевая ставка 16%, то ипотека вряд ли будет дешевле 18–20%. При
                ставке 7% — ипотека может быть 9–10%.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Независимость ЦБ — зачем это нужно?</h2>
            <p>
              Центральный банк специально сделан независимым от правительства. Если бы правительство
              могло напрямую приказывать ЦБ «напечатай ещё денег» — это бы разгоняло инфляцию.
            </p>
            <p className="mt-4">
              Независимость позволяет ЦБ принимать непопулярные, но необходимые решения — например,
              поднять ставку в кризис, даже если это болезненно для экономики в краткосрочной перспективе.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Резервные требования</h2>
            <p>
              ЦБ обязывает коммерческие банки хранить часть привлечённых средств на специальных
              счетах — резервах. Это защита: если вкладчики массово придут забирать деньги, банк
              сможет выплатить хотя бы часть.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-zinc-500 text-sm">Образовательный материал · БанкБаза</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCentralBank;
