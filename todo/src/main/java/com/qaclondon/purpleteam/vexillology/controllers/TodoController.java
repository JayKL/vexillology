package com.qaclondon.purpleteam.vexillology.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qaclondon.purpleteam.vexillology.models.Todo;
import com.qaclondon.purpleteam.vexillology.repos.TodoRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TodoController {
	
	@Autowired
	TodoRepo todoRepo;
	
	@GetMapping("/todos")
	public List<Todo> getAllTodos(){
		Sort sortByCreatedAtDesc = new Sort(Sort.DEFAULT_DIRECTION.DESC, "createdAt");
		return todoRepo.findAll(sortByCreatedAtDesc);
	}

	@PostMapping("/todos")
    public Todo createTodo(@Valid @RequestBody Todo todo) {
        todo.setCompleted(false);
        return todoRepo.save(todo);
    }
	
	@GetMapping(value="/todos/{id}")
	public ResponseEntity<Todo> getTodoById(@PathVariable("id") String id){
		return todoRepo.findById(id)
				.map(todo->ResponseEntity.ok().body(todo))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping(value="/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("id") String id, @Valid @RequestBody Todo todo){
		return todoRepo.findById(id)
				.map(todoData->{
					todoData.setTitle(todo.getTitle());
					todoData.setCompleted(todo.getCompleted());
					Todo updatedTodo = todoRepo.save(todoData);
					return ResponseEntity.ok().body(updatedTodo);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping(value="/todos/{id}")
	public ResponseEntity<?> deleteTodo(@PathVariable("id") String id){
		return todoRepo.findById(id)
				.map(todo->{
					todoRepo.deleteById(id);
					return ResponseEntity.ok().build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
}
