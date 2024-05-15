import styles from './aboutPage.module.css'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <article className={styles.wrapper}>
                <p className={styles.content}>
                    Английский язык изучается не как «английский язык», а как «то как работает
                    швейная машинка».
                </p>
                <p className={styles.content}>
                    Нет никаких терминов типа «существительное», «артикль», «наречие», «глагол» и
                    прочее.
                </p>
                <p className={styles.content}>
                    Идёт «привязка» к тому как устроен наш мир: то как можно его «нарисовать» в
                    воображении собеседника. То есть английский язык рассматривается как способ,
                    используя которой можно строить образы в воображении. У нас уже есть один
                    инструмент — русский язык, а то будет ещё один — английский язык.
                </p>
                <p className={styles.content}>
                    Русский язык при такой системе не используется по принципу «переводится как
                    ...». Русский язык нужен только для того что бы обучаемый изучил устройство
                    «механизма английского языка», как допустим бы на русском языке учитель
                    рассказал учащимся «как работает швейная машинка» и научил ею шить брюки и
                    костюмы.
                </p>
                <p className={styles.content}>
                    То есть если мы в школе, уже умея мыслить (говорить) на русском, учим 10 лет
                    грамматику, правописание и прочее русского же языка, на котором умеем думать, то
                    с английским такой номер не пройдёт. «Школьный» подход работать не будет: на
                    английском мы мыслить не умеем. Поэтому «как думать» на английском учимся по
                    другой системе: учимся рисовать образы (и понимать нарисованные нам) в
                    воображении другими средствами чем в русском.
                </p>
                <p className={styles.content}>
                    Сперва учим какими средствами рисуется всё в русском, потом какими средствами в
                    английском. Таким подходом обеспечивается устранения «паразитирования»
                    английских слов на русских словах обозначающих то же, что и английские слова. Мы
                    не учим слова английского языка через «table переводится стол», мы учим смысл
                    слова table через «чувствовать, что значит table».
                </p>
                <p className={styles.content}>
                    На русском языке мы именно «чувствуем, что такое «стол». Что бы достичь такого
                    же эффекта по отношению к table необходимо убрать психологические зажимы которые
                    образуются из-за «школьной» системы обучения английского языка.
                </p>
                <p className={styles.contentSummary}>
                    Кратко суть такова: как при первом просмотре кинофильма зрителю кажется, что
                    поезд действительно едет на него, так и при изучении английского слова учащийся
                    должен «поверить» в то, что table это действительно стол.
                </p>
                <p className={styles.content}>
                    Изучения языка, на котором говоришь (русский), создает навык разговаривать и
                    понимать английский язык.
                </p>
                <p className={styles.content}>
                    Контент будет полезен тому, кто некоторое время уже учит английский язык, и
                    имеет затруднения по части понимания его грамматики.
                </p>
            </article>
        </div>
    )
}

export default AboutPage
