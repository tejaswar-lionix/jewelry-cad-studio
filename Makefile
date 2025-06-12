build:
	docker build -t jewelry-cad .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
