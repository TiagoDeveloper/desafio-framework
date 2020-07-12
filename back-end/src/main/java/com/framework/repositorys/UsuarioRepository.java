package com.framework.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.framework.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
