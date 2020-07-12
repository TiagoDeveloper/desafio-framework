package com.framework.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.framework.models.Post;

public interface PostRepository extends JpaRepository<Post , Integer> {

}
