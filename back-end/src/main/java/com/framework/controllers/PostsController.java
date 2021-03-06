package com.framework.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.framework.models.Post;
import com.framework.services.PostService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/posts")
//@Slf4j
@AllArgsConstructor
public class PostsController {
	
	public final PostService postService;
	
	@GetMapping
	public ResponseEntity<List<Post>> getAllPosts(){
		return new ResponseEntity<List<Post>>(this.postService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Post> createNewPost(@RequestBody Post post){
		return new ResponseEntity<Post>(this.postService.findById(1), HttpStatus.OK);
	}

}
