package com.framework.services;

import java.util.List;

import com.framework.models.Usuario;

public interface UsuarioService {
	public List<Usuario> findAll();
	public Usuario save(Usuario usuario);
	public void delete(Usuario usuario);
	public Usuario findById(Integer id);
}
