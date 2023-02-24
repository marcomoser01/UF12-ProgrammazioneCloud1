package com.bibblioteca.domains;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "film")
@Data
@Table(name = "film")
@AllArgsConstructor
@NoArgsConstructor
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "titolo", nullable = false) // ,unique = true)
    String titolo;

    @Column(name = "autore")
    String autore;

    @Column(name = "prezzo", precision = 19, scale = 4)
    BigDecimal prezzo;

    @Column(name = "durata")
    String durata;

    @Column(name = "oscar")
    String number;

}
