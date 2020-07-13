DROP SCHEMA IF EXISTS blog CASCADE;
DROP SCHEMA IF EXISTS seguranca CASCADE;

CREATE SCHEMA IF NOT EXISTS blog AUTHORIZATION postgres;
ALTER ROLE "postgres" SET search_path TO blog;


CREATE SCHEMA IF NOT EXISTS seguranca AUTHORIZATION postgres;


CREATE TABLE IF NOT EXISTS seguranca.usuarios (
	id serial NOT NULL PRIMARY KEY,
	nome varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS blog.posts (
	id serial NOT NULL PRIMARY KEY,
	titulo varchar(255) NOT NULL,
	conteudo text NOT NULL,
	id_usuario int NOT NULL
);
ALTER TABLE blog.posts ADD CONSTRAINT usuario_fk FOREIGN KEY (id_usuario) REFERENCES seguranca.usuarios(id);

CREATE TABLE IF NOT EXISTS blog.comentarios (
	id serial NOT NULL PRIMARY KEY,
	conteudo text NOT NULL,
	id_usuario int NOT NULL,
	id_post int NOT NULL
);
ALTER TABLE blog.comentarios ADD CONSTRAINT usuario_fk FOREIGN KEY (id_usuario) REFERENCES seguranca.usuarios(id);
ALTER TABLE blog.comentarios ADD CONSTRAINT post_fk FOREIGN KEY (id_post) REFERENCES blog.posts(id);


CREATE TABLE IF NOT EXISTS blog.albuns (
	id serial NOT NULL PRIMARY KEY,
	foto varchar(255) NOT NULL,
	id_usuario int NOT NULL
);
ALTER TABLE blog.albuns ADD CONSTRAINT usuario_fk FOREIGN KEY (id_usuario) REFERENCES seguranca.usuarios(id);


INSERT INTO seguranca.usuarios (nome, email, "password") VALUES('admin', 'admin@framework.com.br', 'root');


INSERT INTO blog.posts (titulo, conteudo, id_usuario) VALUES('Titulo teste', 'conteudo teste', 1);
INSERT INTO blog.posts (titulo, conteudo, id_usuario) VALUES('Titulo teste', 'conteudo teste', 1);
INSERT INTO blog.posts (titulo, conteudo, id_usuario) VALUES('Titulo teste', 'conteudo teste', 1);
INSERT INTO blog.posts (titulo, conteudo, id_usuario) VALUES('Titulo teste', 'conteudo teste', 1);

--CREATE TABLE seguranca.permissoes (
--	id serial NOT NULL PRIMARY KEY,
--	nome varchar(255) NOT NULL
--);
--INSERT INTO seguranca.permissoes (nome) VALUES('DELETE');

