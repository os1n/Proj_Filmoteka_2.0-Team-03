## WELCOME TO OUR PROJECT!

### Technical Order for the Go-IT JS Final Project Filmoteka_2.0

### Описание: 
Разработанный проект представляет собой веб-ресурс, использующий внешний АПИ сервис для поиска и просмотра информации о видео файлах (фильмов, мультфильмов, короткометражек и т.д.).

### Критерии качественно выполненного проекта

    -/+ Созданы репозитории Proj_Filmoteka_2.0-Team-03. 
    -/- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений
    -/- Имена переменных и функций понятные, описательные
    -/+ Проект собран с помощью Webpack
    -/- Код отформатирован с помощью Prettier
    -/+ Проект собран по принцыпу архитектуры Mobile-First
    -/- Есть файл gallery.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
    -/- Реализована карусель для навигации по страницам с фильмами


### Основной функционал:
1. Адаптивная верстка, реализующая подход Mobile-First (разработка приложения, которое должно работать прежде всего на мобильном - потом на планшете - потом на ПК).
    Дополнительные задачи:
    - Разработка хэдера (3 шт.)
    - Разработка галереи 3х7 или 4х5
    - Разработка разметки для шаблона карточек галереи
    - существут личный кабинет с сортировкой по двум графам (кнопкам) - просмотренные и "для просмотра".
2. Галерея формируется карточками видео-файлов шаблонизаторов handlebars.
    Дополнительно:
    - открытие карточки фильма производиться кликом на фото
    - на главную страницу при входе загружается галерея с запросом 'popular'.
    - фото по фокусу зумируется, а карточка при наведении получет рамку с тенью.
3. Карусель для навигации по страницам с фильмами (результатам поиска видео). 
    Дополнительно:
    - карусель находится внизу галереи. 
    - используем стандартный плагин, напр. Bootstrap, slick, swiper и т.д.
    - при перелистывании карусели включем прогрес бар, напр. Bootstrap, Ladda, fakeLoader и т.д.
4. Форма поиска работает по input, отдельной кнопки нет, но есть ярлык лупы для клика мышью.
    Дополнительно:
    - процесс поиска сопроваждается спиннером
    - при ошибке ввода (пустой промис в ответе сервера) - выдаем ошибку через нотфаер
5. Отдельная карточка фильма открывется в той же вкладке, но в развернутом отображении с полным описанием
    Дополнительно:
    - кнопка добавить в просмотренные
    - кнопка добавить в очередь для просмотра
    - кнопка запустить просмотр, которая открывает модалку с ссылкой на какой-нибудь ютюб ролик или картинка-постер.
6. Авторизация пользователя и хранение списков просмотренных фильмов и фильмов, которые собирается посмотреть, храним в local storage в формате json.
    Дополнительный функционал (факультатив):
    - октрытие модального окна с формой регистрации / логин.
7. Используем нотификаторы типа toastr или pnotify.
    Основные срабатывания:
    - по пустому запросу, выдает сообщение, что инпут пуст, но страница рендерит карточки по пустому запросу.
    - при ошибке ввода (пустой промис в ответе сервера) - выдаем ошибку через нотфаер.

### Prerequisites

Link to the git: 
```shell 
git clone https://github.com/os1n/Proj_Filmoteka_2.0-Team-03.git  
```

### Cloning, pushing and pulling   

Шановні команданти, клонуйте, долучайтеся і, за потреби маякуйте, щоби зробити чисті мерджи.

Коротка інструкція по роботі з гітом за посиланням: 

[https://docs.google.com/document/d/1y-nMdpPIIP83rbqPYt6kM_KXMC83UPbkbxKqgaHlnfI/edit](https://docs.google.com/document/d/1y-nMdpPIIP83rbqPYt6kM_KXMC83UPbkbxKqgaHlnfI/edit)

