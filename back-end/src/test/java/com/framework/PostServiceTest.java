package com.framework;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.framework.models.Post;
import com.framework.models.Usuario;
import com.framework.services.PostService;
import com.framework.services.UsuarioService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class PostServiceTest {

	@Autowired
	private PostService postService;
	
	@Autowired
	private UsuarioService usuarioService;

	private static Post post;
	private static Usuario usuario;
	
	@BeforeAll
	public static void inicializandoPostParaTestes() {
		
		usuario = Usuario.builder()
				.nome("Tiago Pereira")
				.email("tiagopereirafonseca@gmail.com")
				.password("123456")
				.build();
		
		post = Post.builder()
				.titulo("Tulo teste")
				.conteudo("Post sobre inversão de dependencia.")
				.usuario(usuario)
				.build();
	}

	@Test
	@Order(1)
	public void testandoMetodoSave() {
		this.usuarioService.save(usuario);
		this.postService.save(post);
		assertNotNull(post.getId(), "Não pode ser nulo");
		assertNotNull(usuario.getId(), "Não pode ser nulo");
	}
	
	@Test
	@Order(2)
	public void testandoMetodoFindAll() {
		assertFalse(this.postService.findAll().isEmpty(), "Não pode estar vazio");
	}
	
	@Test
	@Order(3)
	public void testandoMetadoDelete() {
		
		this.postService.delete(post);
		this.usuarioService.delete(usuario);
		assertNull(this.postService.findById(post.getId()), "Tem que ser nulo");
		assertNull(this.usuarioService.findById(usuario.getId()), "Tem que ser nulo");
	}
}
