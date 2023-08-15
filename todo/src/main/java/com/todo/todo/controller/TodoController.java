package com.todo.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo.repository.TodoRepository;
import com.todo.todo.entity.Todo;
import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoRepository repository;

    @GetMapping
    public List<Todo> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Todo save(@RequestBody Todo todo) {
        repository.save(todo);
        return todo;
    }

    @PutMapping
    public void alter(Todo todo) {
        if (todo.getId() > 0) {
            repository.save(todo);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
