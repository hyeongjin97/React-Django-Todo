# React-Django-Todo
# Djnago backend
### 1. 가상환경 설치 및 실행 
~~~
python3 -m venv 가상환경 이름(설치) /// source 가상환경이름/bin/activate(실행)
~~~
### 2.장고 설치
~~~
pip3 install django
~~~
### 3.장고 프로젝트/앱 설치
~~~
django-admin startproject 프로젝트 이름/// 프로잭트 이동 /// python3 manage.py startapp 앱 이름
~~~
### 4.settings.py에 앱등록
### 5.modles.py 작성
### 6.마이그래이션 생성 및 마이그래이션
### 7.admin.py에 등록/슈펴유저 생성
### 8.restframework 및 django-cors-header 설치
~~~
pip3 install djangorestframework django-cors-headers
~~~
### 9.settings.py에 rest_framework,corsheader등록
### 10.settings.py에 CORS_ORGIN_WHITELIST작성
~~~
CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000'
]
~~~
### 11.장고앱에 serializers.py 생성 및 작성 
### 12. view.py, urls.py 작성
# React frontend
### 1.리액트 프로젝트 설치
~~~
npx create-react-app 프로젝트 이름
~~~
### 2.bootstarp,reactstrap 설치 및 index.js에 등록
~~~
npm install bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps
~~~
### 3.라액트 프로잭트 폴더에 axios설치
~~~
npm install axios
~~~
### 4.package.json에 proxy 생성
~~~
"proxy": "http://localhost:8000",
~~~
### 5.App.js, component, api 작성

