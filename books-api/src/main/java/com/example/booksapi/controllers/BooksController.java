package com.example.booksapi.controllers;


import com.example.booksapi.models.Book;
import com.example.booksapi.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class BooksController {

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/books")
    public Iterable<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/books/userId/{userId}")
    public List<Book> findBooksByUserId(@PathVariable Integer userId) {
        return bookRepository.findBooksWithUserId(userId);
    }

    @GetMapping("/books/bookId/{bookId}")
    public Book findById(@PathVariable Long bookId) {
        return bookRepository.findOne(bookId);
    }

    @PostMapping("/books")
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @DeleteMapping("/books/{bookId}")
    public HttpStatus deleteBookById(@PathVariable Long bookId) {
        bookRepository.delete(bookId);
        return HttpStatus.OK;
    }

    @PostMapping("/books/{bookId}")
    public Book updateBookById(@PathVariable Long bookId, @RequestBody Book book) {
        Book bookFromDb = bookRepository.findOne(bookId);

        bookFromDb.setTitle(book.getTitle());
        bookFromDb.setAuthor(book.getAuthor());
        bookFromDb.setDescription(book.getDescription());
        bookFromDb.setUserId(book.getUserId());

        return bookRepository.save(bookFromDb);
    }

    @GetMapping("/books/search/{title}")
    public List<Book> searchByTitle(@PathVariable String title) {
        return bookRepository.findBooksWithPartOfTitle(title);
    }

}
