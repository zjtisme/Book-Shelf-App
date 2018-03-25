package com.example.booksapi.models;

import javax.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "BOOKS")

public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "AUTHOR")
    private String author;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "USER_ID")
    private Integer userId;

    public Book(String title, String author, String description, Integer userId) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.userId = userId;
    }
}
