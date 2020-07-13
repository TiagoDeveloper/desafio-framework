package com.framework.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.framework.models.Usuario;
import com.framework.services.UsuarioService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/usuarios")
//@Slf4j
@AllArgsConstructor
public class UsuarioController {
	
	public final UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> getAllUsuarios(){
		return new ResponseEntity<List<Usuario>>(this.usuarioService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Usuario> createNewUsuario(@RequestBody Usuario usuario){
		return new ResponseEntity<Usuario>(this.usuarioService.save(usuario), HttpStatus.OK);
	}

}
