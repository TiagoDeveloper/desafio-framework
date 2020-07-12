package com.framework.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "posts", schema="blog")
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @Builder
@ToString
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String titulo;
	private String conteudo;
	@ManyToOne
	@JoinColumn(name="id_usuario", referencedColumnName = "id")
	private Usuario usuario;

}
