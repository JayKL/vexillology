package com.qaclondon.purpleteam.vexillology.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.qaclondon.purpleteam.vexillology.models.Todo;

@Repository
public interface TodoRepo extends MongoRepository<Todo, String> {

}
