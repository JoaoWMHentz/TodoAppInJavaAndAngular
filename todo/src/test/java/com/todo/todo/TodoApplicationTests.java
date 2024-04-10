package com.todo.todo;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.todo.todo.entity.Todo;
import com.todo.todo.repository.TodoRepository;

@SpringBootTest
class TodoApplicationTests {
    @Autowired
    private TodoRepository repository;
	@Test
	void testSaveTodo() {
		Todo todo = new Todo();
		todo.setTitle("Test");
		todo.setDescription("Test description");
		Date lead = new Date(01,01,2023);
		todo.setLeadTime(lead);
		repository.save(todo);
	}

}
