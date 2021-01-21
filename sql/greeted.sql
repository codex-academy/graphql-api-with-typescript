create table greeted(
	id serial not null primary key,
	username text not null,
	counter int default 0
);