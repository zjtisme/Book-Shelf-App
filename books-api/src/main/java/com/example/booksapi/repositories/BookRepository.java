package com.example.booksapi.repositories;

import com.example.booksapi.models.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long> {

    @Query("SELECT s FROM Book s WHERE s.title LIKE CONCAT('%',:title,'%')")
    List<Book> findBooksWithPartOfTitle(@Param("title") String title);

    @Query("SELECT s FROM Book s WHERE s.userId = :userId")
    List<Book> findBooksWithUserId(@Param("userId") Integer userId);
}
