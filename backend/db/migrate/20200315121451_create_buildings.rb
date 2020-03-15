class CreateBuildings < ActiveRecord::Migration[5.2]
  def change
    create_table :buildings do |t|
      t.boolean :favorite
      t.bigint :external_id, index: { unique: true }

      t.timestamps
    end
  end
end
