git clone https://github.com/GuessMF/next-js-template.git - клонируем репо
cd next-js-template
npm i                        - установка пакетов которые есть в package.json

npm run dev                  - Запуск проекта, после запуска будет доступен по http://localhost:3000


Для гита:

git pull origin dev          - подтягиваем свежую версию

После внесения изменений:

git add .                    - делаем "скриншот" внесенных изменений для отправки в репозиторий
git commit -m 'комент'       - добавляем комент к коммиту
git push origin dev          - пушим изменения в репозиторий на ветку dev