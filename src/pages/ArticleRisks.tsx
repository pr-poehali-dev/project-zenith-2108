import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArticleRisks = () => {
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
          <Icon name="ShieldCheck" size={16} className="text-blue-400" />
          <span className="text-sm text-zinc-400">Безопасность</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Риски и защита: как защищены ваши деньги в банке
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Банки работают с деньгами миллионов людей — и несут огромную ответственность.
          Разбираемся, что может пойти не так и как государство защищает вкладчиков.
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Страхование вкладов в России</h2>
            <p>
              В России действует система страхования вкладов. Если у банка отзовут лицензию,
              государство вернёт вам деньги — но не более 1,4 млн рублей на одного вкладчика
              в одном банке.
            </p>
            <div className="mt-6 bg-green-950/40 border border-green-500/20 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="ShieldCheck" size={20} className="text-green-400" />
                <p className="text-green-300 font-semibold">Лимит страховки: 1 400 000 ₽</p>
              </div>
              <p className="text-zinc-400 text-sm">
                Это сумма на каждый банк отдельно. Если у вас 3 млн рублей — лучше
                разложить по двум-трём разным банкам.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">АСВ — Агентство по страхованию вкладов</h2>
            <p>
              АСВ — это государственная организация, которая управляет системой страхования вкладов.
              Именно она выплачивает компенсации вкладчикам при банкротстве банка. Все банки,
              работающие с вкладами физических лиц, обязаны участвовать в этой системе и платить
              взносы в фонд АСВ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Основные банковские риски</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Кредитный риск",
                  text: "Заёмщики могут не вернуть кредиты. Если доля «плохих» кредитов (просрочка) слишком высока — банк теряет деньги.",
                  icon: "AlertTriangle",
                },
                {
                  title: "Риск ликвидности",
                  text: "Если слишком много вкладчиков одновременно захотят забрать деньги, банку может не хватить наличных. Именно поэтому существуют резервные требования ЦБ.",
                  icon: "Droplets",
                },
                {
                  title: "Процентный риск",
                  text: "Если ключевая ставка резко вырастет, банк может оказаться в ситуации, когда платит по вкладам больше, чем получает по ранее выданным кредитам.",
                  icon: "TrendingDown",
                },
                {
                  title: "Операционный риск",
                  text: "Технические сбои, мошенничество, ошибки персонала — всё это операционные риски, от которых не застрахован ни один банк.",
                  icon: "AlertCircle",
                },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900/60 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={item.icon} size={18} className="text-yellow-400" fallback="AlertCircle" />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Базель: международные стандарты надёжности</h2>
            <p>
              Базельские соглашения — это международные стандарты, которым должны следовать банки
              по всему миру. Главное требование: банк обязан держать собственный капитал не ниже
              определённого процента от активов (взвешенных по риску).
            </p>
            <p className="mt-4">
              Чем больше рискованных кредитов выдал банк — тем больше капитала он обязан иметь
              «про запас». Это снижает вероятность банкротства.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Как выбрать надёжный банк?</h2>
            <ol className="space-y-3 list-none">
              {[
                "Проверьте наличие лицензии на сайте cbr.ru",
                "Убедитесь, что банк участвует в системе страхования вкладов (список на сайте АСВ)",
                "Посмотрите на рейтинг банка — АКРА или Эксперт РА",
                "Обратите внимание на размер банка: крупные банки из топ-20 реже теряют лицензию",
                "Не гонитесь за аномально высокими ставками по вкладам — это часто сигнал проблем",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-sm text-zinc-400 shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-zinc-300">{step}</span>
                </li>
              ))}
            </ol>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-zinc-500 text-sm">Образовательный материал · БанкБаза</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleRisks;
