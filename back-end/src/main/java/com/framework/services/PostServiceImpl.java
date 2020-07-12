package com.framework.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.framework.models.Post;
import com.framework.repositorys.PostRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@AllArgsConstructor
public class PostServiceImpl implements PostService{

	private final PostRepository postRepository;
	
	@Override
	public List<Post> findAll(){
		log.info("Bucando todos os posts");
		return this.postRepository.findAll();
	}

	@Override
	public Post save(Post post) {
		log.info("Salvando o post {}", post.getTitulo());
		return this.postRepository.save(post);
	}

	@Override
	public void delete(Post post) {
		log.info("Deletando o post {}", post.getId());
		this.postRepository.delete(post);
	}

	@Override
	public Post findById(Integer id) {
		return this.postRepository.findById(id).orElse(null);
	}
	
}
