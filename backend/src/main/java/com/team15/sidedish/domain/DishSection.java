
package com.team15.sidedish.domain;

import com.team15.sidedish.exception.CannotFoundDishException;

public enum DishSection {
    MAIN("main"),
    SOUP("soup"),
    SIDE("side");

    private final String section;

    private DishSection(String section) {
        this.section = section;
    }

    public static void checkSectionName(String section) {
        try{
            DishSection.valueOf(section.toUpperCase());
        } catch (IllegalArgumentException exception){
            throw new CannotFoundDishException("There is no section name " + section);
        }
    }


}
