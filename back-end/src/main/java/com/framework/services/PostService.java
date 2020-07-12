package com.framework.services;

import java.util.List;

import com.framework.models.Post;

public interface PostService {
	public List<Post> findAll();
	public Post save(Post usuario);
	public void delete(Post usuario);
	public Post findById(Integer id);
}
