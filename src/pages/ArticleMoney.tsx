import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArticleMoney = () => {
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
          <Icon name="Banknote" size={16} className="text-blue-400" />
          <span className="text-sm text-zinc-400">Механика</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Деньги и расчёты: как движутся деньги в экономике
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Большинство денег в современном мире — это не купюры, а цифры в базах данных банков.
          Разбираемся, как они создаются и перемещаются.
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Что такое денежная масса?</h2>
            <p>
              Денежная масса — это все деньги в экономике: наличные на руках у людей плюс
              безналичные деньги на счетах в банках. Экономисты делят её на агрегаты:
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: "М0", desc: "Только наличные деньги в обращении" },
                { label: "М1", desc: "М0 + деньги на текущих (расчётных) счетах" },
                { label: "М2", desc: "М1 + срочные вклады (до 1 года)" },
                { label: "М3", desc: "М2 + долгосрочные вклады и облигации" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-zinc-900/60 border border-white/10 rounded-xl p-4">
                  <span className="text-blue-400 font-bold text-lg w-10 shrink-0">{item.label}</span>
                  <span className="text-zinc-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Как банки «создают» деньги?</h2>
            <p>
              Когда вы кладёте 100 рублей в банк, банк оставляет часть в резерве (например, 10 рублей),
              а 90 рублей выдаёт в кредит другому клиенту. Тот кладёт их в другой банк — и процесс
              повторяется. Так из 100 рублей наличных в экономике появляется гораздо больше
              безналичных денег.
            </p>
            <div className="mt-6 bg-blue-950/40 border border-blue-500/20 rounded-xl p-5">
              <p className="text-blue-300 font-medium">
                Это называется «мультипликатор денежной массы». Именно поэтому центральный банк
                управляет резервными требованиями — чтобы контролировать, сколько денег
                создаёт банковская система.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Безналичные расчёты</h2>
            <p>
              Когда вы платите картой в магазине, деньги не «едут» физически из вашего банка
              в банк магазина. Происходит следующее:
            </p>
            <ol className="mt-4 space-y-3 list-none">
              {[
                "Терминал магазина передаёт данные платёжной системе (Мир, Visa, Mastercard)",
                "Платёжная система связывает банк покупателя и банк продавца",
                "Банк покупателя уменьшает остаток на вашем счёте",
                "Банк продавца увеличивает остаток на счёте магазина",
                "Реальные расчёты между банками проходят позже через клиринговые системы",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-sm text-zinc-400 shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-zinc-300">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">SWIFT и международные переводы</h2>
            <p>
              SWIFT — это международная система обмена финансовыми сообщениями. Когда вы
              переводите деньги за рубеж, банки общаются через SWIFT-сообщения. Сами деньги
              при этом идут через корреспондентские счета — счета, которые банки открывают
              друг у друга в разных странах.
            </p>
            <p className="mt-4">
              Поэтому международный перевод может идти несколько дней: деньги проходят
              через цепочку банков-корреспондентов, каждый из которых делает свою проводку.
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

export default ArticleMoney;
