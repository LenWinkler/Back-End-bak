
exports.up = function (knex) {
    return knex.schema
        .createTable("verbs", verbs => {
            verbs.increments()
            verbs
                .string('question', 255)
                .notNullable()
            verbs
                .string("answer", 255)
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("verbs")
};
