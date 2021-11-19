
exports.up = function(knex) {
    return knex.schema.alterTable("users",
        function (t) {
          t.string('identifier');
        }
    );
};

exports.down = function(knex) {
    return knex.schema.alterTable("users",
    function (t) {
      t.dropColumn("identifier");
    }
);
};
