const tasks = [
  {
    title: "Заполнить профиль, добавить друзей, лайки и подписки",
    details:
      '\n<ol>\n  <li>Зайди в Facebook через антидетект-браузер (например, AdsPower или GoLogin).</li>\n  <li>Загрузи реальную аватарку (не сток) и обложку.</li>\n  <li>Заполни раздел "О себе": город, образование, интересы.</li>\n  <li>Добавь 3–5 друзей (можно фейков, но старых и живых).</li>\n  <li>Поставь 5–7 лайков в ленте, подпишись на 2–3 страницы.</li>\n</ol>\n',
  },
  {
    title: "Комментарий + пост от себя, живая активность",
    details:
      "\n<ol>\n  <li>Напиши короткий пост на своей стене — например, «Наконец-то пятница!».</li>\n  <li>Оставь 2–3 комментария под чужими постами.</li>\n  <li>Подпишись на группы по интересам (без ссылок!).</li>\n</ol>\n",
  },
  {
    title: "Создать Facebook Page (логотип, обложка, 2 поста)",
    details:
      "\n<ol>\n  <li>Зайди в <a href='https://facebook.com/pages/create' target='_blank'>https://facebook.com/pages/create</a>.</li>\n  <li>Выбери категорию: «Магазин» или «Бренд».</li>\n  <li>Добавь реальный логотип и обложку.</li>\n  <li>Создай 2 поста: один с фото, второй с текстом и эмодзи.</li>\n</ol>\n",
  },
  {
    title: "Прогреть страницу (лайки, комменты, новый пост)",
    details:
      "\n<ol>\n  <li>Поставь лайк своим постам на Facebook Page с личного профиля и с дополнительных аккаунтов (если есть).</li>\n  <li>Попроси друзей/коллег написать пару позитивных комментариев под постами.</li>\n  <li>Опубликуй еще один пост: например, закулисье, отзыв или «Наша команда сегодня...» (можно с фото или мемом).</li>\n  <li>Убедись, что на странице минимум 3 поста, есть лайки и хотя бы 2 комментария.</li>\n</ol>\n",
  },
  {
    title: "Создать BM, привязать страницу и способ оплаты",
    details:
      '\n<ol>\n  <li>Зайди на <a href="https://business.facebook.com/" target="_blank">business.facebook.com</a> и создай новый Бизнес-Менеджер.</li>\n  <li>Дай ему понятное имя (например, под нишу магазина).</li>\n  <li>Добавь свою Facebook Page через «Добавить страницу» — выбери созданную ранее.</li>\n  <li>Зайди в «Настройки платёжных средств», добавь карту или PayPal (лучше виртуалка от банка).</li>\n</ol>\n',
  },
  {
    title: "Создать рекламный аккаунт и Facebook Pixel",
    details:
      "\n<ol>\n  <li>В Бизнес-Менеджере зайди в «Настройки» → «Рекламные аккаунты» → «Создать аккаунт».</li>\n  <li>Выбери страну и валюту (лучше ту же, что у твоего магазина и карты).</li>\n  <li>Зайди в «Источники данных» → «Пиксели» → «Создать пиксель».</li>\n  <li>Скопируй ID пикселя и установи его на Shopify через «Online Store» → «Preferences».</li>\n</ol>\n",
  },
  {
    title: "Запуск первой кампании (вовлеченность, $2/день)",
    details:
      "\n<ol>\n  <li>Создай первую кампанию «Вовлеченность с публикацией».</li>\n  <li>Запусти её на пост Facebook Page, который набрал больше всего лайков/комментов.</li>\n  <li>Установи дневной бюджет $2–3 (или эквивалент), гео — США (или твоя целевая страна).</li>\n  <li>Следи за показателями, пока просто набирается активность.</li>\n</ol>\n",
  },
  {
    title: "Увеличить бюджет, продолжать постинг",
    details:
      "\n<ol>\n  <li>Плавно увеличь бюджет кампании на 20–30% (например, с $2 до $2.5–3).</li>\n  <li>Опубликуй новый пост — видео, опрос, сторис, что угодно для «живости».</li>\n  <li>Лайкай, комментируй свои посты, делай видимость естественного общения.</li>\n</ol>\n",
  },
  {
    title: "Увеличить бюджет, проверить показатели",
    details:
      "\n<ol>\n  <li>Проверь в Ads Manager метрики: CPM, CTR, количество реакций/комментов.</li>\n  <li>Если всё нормально — снова увеличь бюджет на 20%.</li>\n  <li>Если есть негатив, удали такие комменты или настрой фильтр.</li>\n</ol>\n",
  },
  {
    title: "Продолжить рост активности и бюджета",
    details:
      "\n<ol>\n  <li>Ещё раз увеличь бюджет, если всё ок.</li>\n  <li>Добавь 1–2 поста на страницу (желательно разного формата — фото, видео, текст).</li>\n  <li>Сделай кросс-постинг: опубликуй ссылку на страницу в 1–2 релевантных группах.</li>\n</ol>\n",
  },
  {
    title: "Создать пост с оффером + запустить тестовую рекламу",
    details:
      "\n<ol>\n  <li>Создай пост на Facebook Page с уникальным торговым предложением (УТП):<br>«🔥 Новинка! Только сейчас скидка 20% на первый заказ — ссылка в описании!»</li>\n  <li>Запусти рекламную кампанию на этот пост, цель — трафик на сайт или конверсии.</li>\n  <li>Бюджет теста: $5–10 в день.</li>\n</ol>\n",
  },
  {
    title: "Оптимизация оффера и креативов",
    details:
      "\n<ol>\n  <li>Сравни показатели рекламы: какой креатив и аудитория дают лучший CTR, дешевле клики/конверсии.</li>\n  <li>Отключи всё, что сливает бюджет и не приносит результата.</li>\n  <li>Добавь новые варианты креативов и аудитории, протестируй их.</li>\n</ol>\n",
  },
  {
    title: "Сделать анализ CTR, CPM, выключить слабое",
    details:
      "\n<ol>\n  <li>Проверь итоговые результаты: CPM должен быть не выше $5–8, CTR не ниже 1%.</li>\n  <li>Отключи неэффективные группы объявлений и креативы.</li>\n  <li>Сделай выводы и подготовь лучшие варианты к масштабированию.</li>\n</ol>\n",
  },
  {
    title: "Масштаб — дублировать, увеличить бюджет, аудитории",
    details:
      "\n<ol>\n  <li>Дублируй лучшие кампании, увеличь бюджет до $10–20 в день.</li>\n  <li>Проверь новый трафик, расширь аудиторию по интересам и lookalike.</li>\n  <li>Контролируй показатели каждый день — если есть просадка, уменьши бюджет или замени креатив.</li>\n</ol>\n",
  },
];

function loadProgress() {
  return (
    JSON.parse(localStorage.getItem("bmProgress")) ||
    Array(tasks.length).fill(false)
  );
}
function saveProgress(progress) {
  localStorage.setItem("bmProgress", JSON.stringify(progress));
}

function renderTasks() {
  const progress = loadProgress();
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "accordion-task";

    const header = document.createElement("div");
    header.className =
      "accordion-header" + (progress[index] ? " completed" : "");
    header.setAttribute("aria-expanded", "false");

    const span = document.createElement("span");
    span.textContent = `День ${index + 1}: ${task.title}`;

    const arrowBtn = document.createElement("button");
    arrowBtn.className = "toggle-btn";
    arrowBtn.innerHTML = "&#9654;";

    const completeBtn = document.createElement("button");
    completeBtn.className =
      "complete-btn" + (progress[index] ? " completed" : "");
    completeBtn.textContent = progress[index] ? "✓ Выполнено" : "Выполнить";
    completeBtn.disabled = progress[index] || false;

    completeBtn.addEventListener("click", (e) => {
      progress[index] = true;
      saveProgress(progress);
      renderTasks();
      e.stopPropagation();
    });

    const body = document.createElement("div");
    body.className = "accordion-body";
    body.innerHTML = task.details;
    body.style.display = "none";

    function toggleAccordion(e) {
      if (e.target === completeBtn) return;
      const opened = body.style.display === "block";
      body.style.display = opened ? "none" : "block";
      header.setAttribute("aria-expanded", !opened);
      arrowBtn.classList.toggle("opened", !opened);
    }

    header.addEventListener("click", toggleAccordion);
    arrowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAccordion();
    });

    header.appendChild(span);

    // создаём обёртку для кнопок
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.appendChild(arrowBtn);
    controls.appendChild(completeBtn);

    // добавляем блок кнопок
    header.appendChild(controls);

    taskDiv.appendChild(header);
    taskDiv.appendChild(body);
    taskList.appendChild(taskDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderTasks);
