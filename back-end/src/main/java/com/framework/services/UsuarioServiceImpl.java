package com.framework.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.framework.models.Usuario;
import com.framework.repositorys.UsuarioRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@AllArgsConstructor
public class UsuarioServiceImpl implements UsuarioService{

	private final UsuarioRepository usuarioRepository;
	
	@Override
	public List<Usuario> findAll(){
		log.info("Bucando todos os usuários");
		return this.usuarioRepository.findAll();
	}

	@Override
	public Usuario save(Usuario usuario) {
		log.info("Salvando o usuário {}", usuario.getNome());
		return this.usuarioRepository.save(usuario);
	}

	@Override
	public void delete(Usuario usuario) {
		log.info("Deletando o usuário {}", usuario.getId());
		this.usuarioRepository.delete(usuario);
	}

	@Override
	public Usuario findById(Integer id) {
		return this.usuarioRepository.findById(id).orElse(null);
	}
	
	@Override
	public Usuario findByEmail(String email) {
		return this.usuarioRepository.findByEmail(email);
	}
	
}
